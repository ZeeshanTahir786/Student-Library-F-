import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import "./bodycard.css";

const Bodycard = () => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/v1/getAllBooks"
        );
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
  }, []);
  console.log("Boook", book);
  return (
    <div>
      <div className="card">
        {book?.data?.map((book) => (
          <Card book={book} />
        ))}
      </div>
    </div>
  );
};

export default Bodycard;
