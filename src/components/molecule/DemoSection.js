import PropTypes from "prop-types";
import {LinkPreviewer} from "./LinkPreviewer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithubAlt, faGithubSquare} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import {faLink} from "@fortawesome/free-solid-svg-icons";


export function DemoSection({
    id,
    linkToLiveDemo,
    linkToSourceCode,
    sourceCodeText,
    thumbnailImage,
    title,
}) {
    return (
        <div className="hover:bg-gray-300">
            <a
                data-testid={id}
                href={linkToLiveDemo}
                id={id}
                target='_blank'
            >
                <div className="py-4 border-solid border-b-black border-b-2">
                    {title} <FontAwesomeIcon textAnchor='demo' icon={faLink}/>
                    <div>
                        <LinkPreviewer
                            linkToLiveDemo={linkToLiveDemo}
                            imageSrc={thumbnailImage}
                        />
                    </div>
                    <a
                        href={linkToSourceCode}
                        target='_blank'
                        className="hover:text-blue-700"
                    >
                        Source Code
                        <FontAwesomeIcon className='ml-4' icon={faGithubAlt} />
                    </a>
                </div>
            </a>
        </div>
    );
}

DemoSection.propTypes = {
    linkToLiveDemo: PropTypes.string,
    linkToSourceCode: PropTypes.string,
    sourceCodeText: PropTypes.string,
    thumbnailImage: PropTypes.string,
    title: PropTypes.string
};