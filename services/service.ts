import axios from 'axios';
import { GetMovieByIdProps, ResultsMovieProps } from '../types/response.type';

const apiUrl = "https://api.themoviedb.org/3"
const apiKey = "api_key=68d27499b77b6f90282688009518c478"

// Get popular movies from Api
export const getPopularMovies = async (): Promise<ResultsMovieProps[]> => {
    const res = await axios.get(
        `${apiUrl}/movie/popular?${apiKey}`,
    );
    return res.data.results;
};

// Get upcoming movies from Api
export const getUpcomingMovies = async (): Promise<ResultsMovieProps[]> => {
    const res = await axios.get(
        `${apiUrl}/movie/upcoming?${apiKey}`,
    );
    return res.data.results;
};

// Get popular tv from Api
export const getPopularTV = async (): Promise<ResultsMovieProps[]> => {
    const res = await axios.get(
        `${apiUrl}/tv/popular?${apiKey}`,
    );
    return res.data.results;
};

// Get Family movies from Api
export const getFamilyMovies = async (): Promise<ResultsMovieProps[]> => {
    const res = await axios.get(
        `${apiUrl}/discover/movie?${apiKey}&with_genres=10751`,
    );
    return res.data.results;
};

// Get Family movies from Api
export const getDocumentaryMovies = async (): Promise<ResultsMovieProps[]> => {
    const res = await axios.get(
        `${apiUrl}/discover/movie?${apiKey}&with_genres=99`,
    );
    return res.data.results;
};

// Get Movie by id
export const getMovie = async (id: number | undefined): Promise<GetMovieByIdProps> => {
    const res = await axios.get(
        `${apiUrl}/movie/${id}?${apiKey}`,
    );
    return res.data;
};