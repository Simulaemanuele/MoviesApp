import { ResultsMovieProps, ResultsTVProps } from "./response.type";

export type ErrorComponentProps = {
    errorText1: string;
    errorText2: string;
}

export type DetailScreenProps = {
    route: {
        params: {
            movieDetail: ResultsMovieProps & ResultsTVProps,
            movieId?: number
        }
    }
    navigation: any
}

export type VideoComponentProps = {
    onClose: () => void
}