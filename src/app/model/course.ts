import {PageEvent} from '@angular/material';


export interface Course {
    pageEvent: PageEvent;
    id: number;
    description: string;
    iconUrl: string;
    courseListIcon: string;
    longDescription: string;
    category: string;
    lessonsCount: number;
}
