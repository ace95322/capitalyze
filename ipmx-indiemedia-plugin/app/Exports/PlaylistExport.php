<?php

namespace App\Exports;

use App\Playlist;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;

class PlaylistExport implements FromCollection, WithHeadings, WithMapping
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
        $query = Playlist::where('id', '<>', null);

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

    public function map($playlist): array
    {
        return [
            $playlist->title,
            null,
            null,
            null
        ];
    }

    public function headings(): array
    {
        return [
            'Title', 'User', 'Public', 'Followers'
        ];
    }
}
