import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Tag from "./Tag";
import { fetchTags } from "../../features/tags/tagSlice";

export default function Tags() {
    const dispatch = useDispatch();
    const tags = useSelector((state) => state.tags);
    useEffect(() => {
        dispatch(fetchTags());
    }, [dispatch]);

    return (
        <section>
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
                {tags.tagItems?.map(tag => <Tag key={tag.id} tag={tag} />)}
            </div>
        </section>
    );
}