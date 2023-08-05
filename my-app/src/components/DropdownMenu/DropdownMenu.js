import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown} from "react-bootstrap";

const DropdownMenu = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={{backgroundColor: 'gray', border: 'gray'}}>
                Genres
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="/genre/action/page/1">Action</Dropdown.Item>
                <Dropdown.Item href="/genre/adventure/page/1">Adventure</Dropdown.Item>
                <Dropdown.Item href="/genre/animation/page/1">Animation</Dropdown.Item>
                <Dropdown.Item href="/genre/comedy/page/1">Comedy</Dropdown.Item>
                <Dropdown.Item href="/genre/crime/page/1">Crime</Dropdown.Item>
                <Dropdown.Item href="/genre/documentary/page/1">Documentary</Dropdown.Item>
                <Dropdown.Item href="/genre/drama/page/1">Drama</Dropdown.Item>
                <Dropdown.Item href="/genre/family/page/1">Family</Dropdown.Item>
                <Dropdown.Item href="/genre/fantasy/page/1">Fantasy</Dropdown.Item>
                <Dropdown.Item href="/genre/history/page/1">History</Dropdown.Item>
                <Dropdown.Item href="/genre/horror/page/1">Horror</Dropdown.Item>
                <Dropdown.Item href="/genre/music/page/1">Music</Dropdown.Item>
                <Dropdown.Item href="/genre/mystery/page/1">Mystery</Dropdown.Item>
                <Dropdown.Item href="/genre/romance/page/1">Romance</Dropdown.Item>
                <Dropdown.Item href="/genre/science_fiction/page/1">Science Fiction</Dropdown.Item>
                <Dropdown.Item href="/genre/tv_movie/page/1">TV Movie</Dropdown.Item>
                <Dropdown.Item href="/genre/thriller/page/1">Thriller</Dropdown.Item>
                <Dropdown.Item href="/genre/war/page/1">War</Dropdown.Item>
                <Dropdown.Item href="/genre/western/page/1">Western</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export {DropdownMenu};