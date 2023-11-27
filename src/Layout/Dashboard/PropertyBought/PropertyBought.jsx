import { Link } from "react-router-dom";
import UseWishList from "../../../Hook/UseWishList";



const PropertyBought = () => {
    const [wishlist]=UseWishList();
    return (
        <div>
            <div className="flex justify-evenly mb-8">
                <h2 className="text-4xl">Property : {wishlist.length}</h2>
                {/* <h2 className="text-4xl">Total Price: {totalPrice}</h2> */}
                {wishlist.length> 0? <Link to="/dashboard/payment">
                    <button className="btn  bg-orange-300">Pay</button>
                </Link>:
                <button disabled className="btn btn-primary">Pay</button>
                }
            </div>
            <div className="overflow-x-auto">
                <table className="table  w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>location</th>
                            <th>title</th>
                            <th>amount</th>
                            <th>agent</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            wishlist.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                {item.location}
                                </td>
                                <td>
                                    {item.title}
                                </td>
                                <td>${item.amount}</td>
                                <td>{item.agent}</td>
                                <td>{item.status}</td>
                                
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PropertyBought;