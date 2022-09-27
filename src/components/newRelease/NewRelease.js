import React from "react";
import {useSelector} from 'react-redux';

import List from "../list/List";

export default function NewRelease(){
    const {songs} = useSelector((state) => state);

    return(<List type={"song"} title={"Released this week"} items = {songs}></List>);
}

