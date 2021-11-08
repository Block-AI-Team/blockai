import React from "react";
import { Player } from 'video-react';

const CryptoBoyNFTImage = ({ path }) => {
    return (
        <div>
            <Player
                fluid={false}
                width={480}
                height={272}
            >
                <source src={path} />
            </Player>
        </div>
    );
};

export default CryptoBoyNFTImage;