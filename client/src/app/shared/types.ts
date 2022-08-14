export interface Lecturer {
    id: number;
    name: string;
    surname: string;
    phone: string;
    email:string;
    created: string;
    image: string;
}

export interface Course {
    id: number;
    course_code: string;
    name: string;
    description: string;
    price: number;
    start_date: string;
    lessons: number;
    category: string;
    lecturer: string;
}

export type sortColumn = 'name' | 'price';

export interface CourseSort {
    column: sortColumn;
    dirAsc: boolean;
}

export interface FilePath {
    name: string;
}