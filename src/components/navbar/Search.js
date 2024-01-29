import { useDispatch } from "react-redux";
import searchImage from "../../assets/search.svg";
import { searchFilter } from "../../features/filterVideos/filterVideosSlice";
import { useRef } from "react";

export default function Search() {
    const dispacth = useDispatch();
    const inputRef = useRef(null);

    const handleSearch = (event) => {
        event.preventDefault()
        const inputValue =(inputRef.current.value);
        dispacth(searchFilter(inputValue))
    }
    return (
        <form onSubmit={handleSearch}>
            <input
                ref={inputRef}
                className="outline-none border-none mr-2"
                type="search"
                name="search"
                placeholder="Search"
            />
            <img
                onClick={handleSearch}
                className="inline h-4 cursor-pointer"
                src={searchImage}
                alt="Search"
            />
        </form>
    );
}
