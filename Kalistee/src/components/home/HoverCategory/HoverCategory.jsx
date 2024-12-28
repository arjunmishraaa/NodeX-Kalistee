import React from 'react';
// import { useHistory } from 'react-router-dom';

const HoverCategory = () => {
    // const history = useHistory();

    // const handleImageClick = (pageUrl) => {
    //     history.push(pageUrl);
    // };

    return (
        <div className="flex justify-center align-middle gap-2">
            <div className="column  border-black border-[2px] rounded-lg">
                <img
                    src="https://ik.imagekit.io/Jivan/4.png?updatedAt=1735336905440"
                    alt="Image 1"
                    onMouseOver={(e) => (e.currentTarget.src = 'https://ik.imagekit.io/Jivan/3.png?updatedAt=1735336905512')}
                    onMouseOut={(e) => (e.currentTarget.src = 'https://ik.imagekit.io/Jivan/4.png?updatedAt=1735336905440')}
                    // onClick={() => handleImageClick('/page1')}
                    className='rounded-lg'
                />
            </div>
            <div className="column  border-black border-2 rounded-lg">
                <img
                    src="https://ik.imagekit.io/Jivan/6.png?updatedAt=1735336905512"
                    alt="Image 3"
                    onMouseOver={(e) => (e.currentTarget.src = 'https://ik.imagekit.io/Jivan/5.png?updatedAt=1735336905454')}
                    onMouseOut={(e) => (e.currentTarget.src = 'https://ik.imagekit.io/Jivan/6.png?updatedAt=1735336905512')}
                    // onClick={() => handleImageClick('/page2')}
                    className='rounded-lg'
                />
            </div>
            <div className="column  border-black border-2 rounded-lg">
                <img
                    src="https://ik.imagekit.io/Jivan/2.png?updatedAt=1735336905515"
                    alt="Image 5"
                    onMouseOver={(e) => (e.currentTarget.src = 'https://ik.imagekit.io/Jivan/1.png?updatedAt=1735336905516')}
                    onMouseOut={(e) => (e.currentTarget.src = 'https://ik.imagekit.io/Jivan/2.png?updatedAt=1735336905515')}
                    // onClick={() => handleImageClick('/page3')}
                    className='rounded-lg'
                />
            </div>
        </div>
    );
};

export default HoverCategory;
