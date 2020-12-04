import React, { useState } from "react";
import css from "./inputPage.module.css";
import {withRouter} from "react-router-dom";
import Resizer from 'react-image-file-resizer';

const InputPage = () => {

    const [file, setFile] = useState();

    const onChange = (e) => {

        let fileInput = false

        if(e.target.files[0]) {
            fileInput = true
        }

        if(fileInput) {
            Resizer.imageFileResizer(
                e.target.files[0],
                300,
                300,
                'JPEG',
                100,
                0,
                uri => {
                    console.log(uri);
                    //setFile(URL.createObjectURL(uri));
                    setFile(uri);

                },
                'base64',
                100,
                100,
            );
        }

        console.log('->', e.target.files[0]);

       
    }

    

    return(
        <div>
            <input type="file" onChange={ onChange } />
            <div className={css.pictureWrapper}>
                <img src={ file } alt="" />
            </div>

            
        </div>
    )
}

export default withRouter(InputPage);

