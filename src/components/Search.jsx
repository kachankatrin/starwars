import React from 'react'
import { Button } from "react-bootstrap";
import _ from "lodash";
export default function Search(props) {
    return (
        <div>
            <form>
            <input 
              type='search'
              onChange={props.handleInput}
              value={props.search}
              placeholder='Search...'
            />
            {/* <Button onClick={props.handleClick}>Search</Button> */}
            </form>
        </div>
    )
}