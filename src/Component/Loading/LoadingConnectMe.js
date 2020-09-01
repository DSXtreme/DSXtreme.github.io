import React, { Component } from 'react'
import { css } from "@emotion/core"
import PropagateLoader from "react-spinners/PropagateLoader"

export default class LoadingConnectMe extends Component {
    render() {
        return (
            <div>
                <PropagateLoader
                    size={10}
                    color={"#00DBFF"}
                    loading="true"
                />
            </div>
        )
    }
}
