import UseProperty from "../../../../Hook/UseProperty";
import AdvertiseProperty from "./AdvertiseProperty";


const Advertisement = () => {
    const [properties]=UseProperty();
    return (
        <div>
            
            <div className="mx-auto text-center md:w-4/12 my-8">
           
            <h3 className="text-3xl text-orange-400 uppercase border-y-4 py-4">Advertisement</h3>
        </div>
            
            <div className="grid md:grid-cols-2 gap-10">
                {
                    properties.map(item => <AdvertiseProperty
                        key={item._id}
                        item={item}
                    ></AdvertiseProperty>)
                }
            </div>
            
        </div>
    );
};

export default Advertisement;