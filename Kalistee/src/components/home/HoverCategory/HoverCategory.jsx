import React from 'react';
// import { useHistory } from 'react-router-dom';

const HoverCategory = () => {
    // const history = useHistory();

    // const handleImageClick = (pageUrl) => {
    //     history.push(pageUrl);
    // };

    return (
        <div className="flex justify-center align-middle gap-2">
            <div className="column  border-black border-2 rounded-lg">
                <img
                    src="https://ik.imagekit.io/durgeshsh/NodeX_images/1.png?updatedAt=1735332715936"
                    alt="Image 1"
                    onMouseOver={(e) => (e.currentTarget.src = 'https://ik.imagekit.io/durgeshsh/NodeX_images/2.png?updatedAt=1735332715994')}
                    onMouseOut={(e) => (e.currentTarget.src = 'https://ik.imagekit.io/durgeshsh/NodeX_images/1.png?updatedAt=1735332715936')}
                    // onClick={() => handleImageClick('/page1')}
                />
            </div>
            <div className="column  border-black border-2 rounded-lg">
                <img
                    src="https://ik.imagekit.io/durgeshsh/NodeX_images/3.png?updatedAt=1735332715884"
                    alt="Image 3"
                    onMouseOver={(e) => (e.currentTarget.src = 'https://ik.imagekit.io/durgeshsh/NodeX_images/4.png?updatedAt=1735332715941')}
                    onMouseOut={(e) => (e.currentTarget.src = 'https://ik.imagekit.io/durgeshsh/NodeX_images/3.png?updatedAt=1735332715884')}
                    // onClick={() => handleImageClick('/page2')}
                />
            </div>
            <div className="column  border-black border-2 rounded-lg">
                <img
                    src="https://ik.imagekit.io/durgeshsh/NodeX_images/5.png?updatedAt=1735332715880"
                    alt="Image 5"
                    onMouseOver={(e) => (e.currentTarget.src = 'https://ik.imagekit.io/durgeshsh/NodeX_images/6.png?updatedAt=1735332715990')}
                    onMouseOut={(e) => (e.currentTarget.src = 'https://ik.imagekit.io/durgeshsh/NodeX_images/5.png?updatedAt=1735332715880')}
                    // onClick={() => handleImageClick('/page3')}
                />
            </div>
        </div>
    );
};

export default HoverCategory;
