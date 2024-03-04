import PropTypes from "prop-types";
import {LinkPreviewer} from "./LinkPreviewer";


export function DemoSection({
    linkToLiveDemo,
    linkToSourceCode,
    // metaContent,
    metaName,
    metaProperty,
    thumbnailImage,
    title,
}) {
    return (
        <div className="flex flex-col-mobile">
            {title}
            <LinkPreviewer
                linkToLiveDemo={linkToLiveDemo}
                id="demo-preview"
                imageSrc={thumbnailImage}
            />
        </div>
    );
}

DemoSection.propTypes = {
    linkToLiveDemo: PropTypes.string,
    thumbnailImage: PropTypes.string,
    linkToSourceCode: PropTypes.string,
    metaName:PropTypes.string,
    metaProperty:PropTypes.string,
    title: PropTypes.string
};