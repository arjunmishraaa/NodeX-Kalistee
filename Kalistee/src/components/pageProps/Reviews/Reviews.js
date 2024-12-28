import React from 'react';

const Review = ({ name, rating, comment }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<span key={i} className="text-yellow-500 mr-1">&#9733;</span>);
        }
        return stars;
    };

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4 ">
            <h2 className="text-xl font-semibold mb-2">{name}</h2>
            <div className="flex items-center mb-2">
                {renderStars()}
                <span className="text-gray-600">{rating}</span>
            </div>
            <p className="text-gray-800">{comment}</p>
        </div>
    );
};

const Reviews = () => {
    const reviews = [
        { name: "John", rating: 5, comment: "Great product! It really improved my skin." },
        { name: "Emily", rating: 4, comment: "I've been using this for a month and my hair feels much healthier." },
        { name: "Michael", rating: 4, comment: "This cream worked wonders on my dry skin." },
        { name: "Sophia", rating: 5, comment: "I love how this shampoo makes my hair shiny and smooth." },
        { name: "Daniel", rating: 5, comment: "Highly recommend this product for anyone with sensitive skin." },
        { name: "Olivia", rating: 4, comment: "My hair has never looked better since I started using this conditioner." },
        { name: "James", rating: 4, comment: "This face mask is so refreshing and leaves my skin feeling rejuvenated." },
        { name: "Ava", rating: 5, comment: "I can't believe how soft and silky my hair is after using this oil." },
        { name: "William", rating: 5, comment: "This lotion has a pleasant scent and keeps my skin moisturized all day." },
        { name: "Isabella", rating: 4, comment: "I've noticed a significant improvement in my skin's texture after using this serum." }
    ];

    return (
        <div>
            <h1 className="text-4xl font-semibold mb-4 mt-8">Reviews</h1>
            {reviews.map((review, index) => (
                <div key={index}>
                    <Review name={review.name} rating={review.rating} comment={review.comment} />
                </div>
            ))}
        </div>
    );
};

export default Reviews;
