import PropTypes from "prop-types";
// import '../../css/molecule/link-previewer.css';

export const LinkPreviewer = ({
    imageSrc
}) => {
    return (
            <div className='demo-preview'>
                <img
                    alt="To-do demo"
                    src={imageSrc}
                    className='max-h-64 m-2 border-solid border-2 border-black rounded-2xl'
                />
            </div>
    );
};

LinkPreviewer.propTypes = {
    linkToLiveDemo: PropTypes.string
};
