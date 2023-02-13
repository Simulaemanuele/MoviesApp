export type ResultsMovieProps = {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[];
    id?: number;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path: string;
    release_date?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
};

export type ResultsTVProps = {
    backdrop_path?: string,
    first_air_date?: string,
    genre_ids?: number[],
    id?: number,
    name?: string,
    origin_country?: string[],
    original_language?: string,
    original_name?: string,
    overview?: string,
    popularity?: number,
    poster_path: string,
    vote_average?: number,
    vote_count?: number
}

export type GetMovieByIdProps = {
    adult?: boolean,
    backdrop_path?: string,
    belongs_to_collection?: {
        id?: number,
        name?: string,
        poster_path?: string,
        backdrop_path?: string
    },
    budget?: number,
    genres?: {
        id?: number,
        name?: string
    }[],
    homepage?: string,
    id?: number,
    imdb_id?: string,
    original_language?: string,
    original_title?: string,
    overview?: string,
    popularity?: number,
    poster_path?: string,
    production_companies?: {
        id?: number,
        logo_path?: string,
        name?: string,
        origin_country?: string
    }[],
    production_countries?: {
        iso_3166_1?: string,
        name?: string
    }[],
    release_date?: string,
    revenue?: number,
    runtime?: number,
    spoken_languages?: {
        english_name?: string,
        iso_639_1?: string,
        name?: string
    }[],
    status?: string,
    tagline?: string,
    title?: string,
    video?: boolean,
    vote_average: number,
    vote_count?: number
}

export type SearchMovieProps = {
    page?: number,
    results?: {
        poster_path?: string | null,
        adult?: boolean,
        overview?: string,
        release_date?: string,
        genre_ids?: number[],
        id?: number,
        original_title?: string,
        original_language?: string,
        title?: string,
        backdrop_path?: string | null,
        popularity?: number,
        vote_count?: number,
        video?: boolean,
        vote_average?: number,
    }[],
    total_results?: number,
    total_pages?: number
}

export type SearchTvProps = {
    page?: number,
    results?: {
        poster_path?: string | null,
        popularity?: number,
        id?: number,
        backdrop_path?: string | null,
        vote_average?: number,
        overview?: string,
        first_air_date?: string,
        origin_country?: string[],
        genre_ids?: number[],
        original_language?: string,
        vote_count?: number,
        name?: string,
        original_name?: string,
    }[],
    total_results?: number,
    total_pages?: number
}

export type StringArray = string[] | undefined