
const apiKey = "AIzaSyBnq1OJqIHyeL21P_sN_CEUQiQpaGq-Cu0";
const fetchBooks = async (search) => {
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apiKey}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching books:', error);
    }
};
export default fetchBooks;
