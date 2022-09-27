import React , {useEffect} from "react";
import NewRelease from '../../components/newRelease/NewRelease';
import {useDispatch} from "react-redux";
import {fetchSongs} from "../../redux/thunks/FetchSongs";
import Featured from '../../components/featured/Featured';
import {fetchFeaturedPlaylist} from "../../redux/thunks/fetchFeaturedPlaylist"


export default function Home(){

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSongs());
        dispatch(fetchFeaturedPlaylist())
    }, []);

    return (<>
            <NewRelease></NewRelease>
            <Featured></Featured>
       </>);
}