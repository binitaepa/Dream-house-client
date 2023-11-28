
import { FaTrashAlt } from "react-icons/fa";
import UseReviewList from "../../../Hook/UseReviewList";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Hook/UseAxiosSecure";




const ReviewRate = () => {
    const [reviewlist,refetch]=UseReviewList();
    const axiosSecure=UseAxiosSecure()

    const handleDeleteReview=(item)=>{
        console.log(item);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/ratelist/${item._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                           refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
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