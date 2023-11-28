
import { FaTrashAlt } from "react-icons/fa";
import UseReviewList from "../../../Hook/UseReviewList";




const ReviewRate = () => {
    const [reviewlist]=UseReviewList();
    const handleDeleteReview=(item)=>{
        console.log(item);
    }

    return (
         <div>
            <div className="flex justify-evenly mb-8">
                <h2 className="text-4xl">Review : {reviewlist.length}</h2>
                
            </div>
            <div className="overflow-x-auto">
                <table className="table  w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>rating</th>
                            <th>title</th>
                            <th>time</th>
                            <th>agent</th>
                            <th>description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviewlist.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                {item.rating}
                                </td>
                                <td>
                                    {item.title}
                                </td>
                                <td>{item.time}</td>
                                <td>{item.agent.name}</td>
                                <td>{item.description}</td>
                                <td>
                                    <button
                                        onClick={() => handleDeleteReview(item)}
                                        className="btn btn-ghost btn-lg">
                                        <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReviewRate;