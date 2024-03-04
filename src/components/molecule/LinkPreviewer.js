import PropTypes from "prop-types";
// import '../../css/molecule/link-previewer.css';

export const LinkPreviewer = ({
    linkToLiveDemo,
    imageSrc,
    id
}) => {
    return (
        <a
            href={linkToLiveDemo}
            className=""
            id={id}
        >
            <div className='demo-preview'>
                <img
                    alt="To-do demo"
                    src={imageSrc}
                />
               {/* <iframe
                    width="500"
                    height="315"
                    className='responsive-iframe'
                    src={linkToLiveDemo}>
                </iframe>*/}
            </div>
        </a>
    );
};

LinkPreviewer.propTypes = {
    linkToLiveDemo: PropTypes.string
};
