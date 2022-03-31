<?php

namespace App\Exports;

use App\Podcast;
use Carbon\Carbon;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class PodcastExport implements FromCollection, WithHeadings, WithMapping
{
    public $start_date;
    public $end_date;

    public function __construct($start_date = null, $end_date = null)
    {
        $this->start_date = $start_date;
        $this->end_date = $end_date;
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        $query = Podcast::where('id', '<>', null)->with(['follows', 'artist_relation']);

        /**
         * Set Date Filter Logic
         */
        if($this->start_date){
            $query->whereDate('created_at', '>=', $this->start_date);
        }
        if($this->end_date){
            $query->whereDate('created_at', '<=', $this->end_date);
        }

        $result = $query->orderBy('created_at', 'desc')->get();

        return $result;
    }

    public function map($podcast): array
    {
        return [
            $podcast->title,
            $podcast->artist_relation->firstname,
            $podcast->follows->count(),
            Carbon::parse($podcast->created_at)->format('M d Y')
        ];
    }

    public function headings(): array
    {
        return [
            'Title', 'Podcaster', 'Followers', 'Created At'
        ];
    }
}
