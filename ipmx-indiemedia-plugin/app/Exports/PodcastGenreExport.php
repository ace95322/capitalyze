<?php

namespace App\Exports;

use App\PodcastGenre;
use Carbon\Carbon;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class PodcastGenreExport implements FromCollection, WithHeadings, WithMapping
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
        $query = PodcastGenre::where('id', '<>', null);

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
        Log::info("Data  => ". print_r($result, true));
        return $result;
    }

    public function map($podcast_genre): array
    {
        return [
            $podcast_genre->name,
            Carbon::parse($podcast_genre->created_at)->format('M d Y')
        ];
    }

    public function headings(): array
    {
        return [
            'Name', 'Created At'
        ];
    }
}
