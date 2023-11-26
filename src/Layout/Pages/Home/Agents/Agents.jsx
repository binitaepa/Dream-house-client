
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
const Agents = () => {
    return (
        <section>
            <div className="mx-auto text-center md:w-4/12 my-8 ">
           
           <h3 className="text-3xl text-orange-400 uppercase border-y-4 py-4">Meet the agent</h3>
       </div>
            <div className="flex gap-10 mt-5">
            
            <div><div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Wade Warren</h2>
    <p>Salesperson</p>
    <div className="card-actions justify-center">
      <button className="flex gap-2"><MdOutlineEmail></MdOutlineEmail><FaPhone></FaPhone></button>
    </div>
  </div>
</div></div>
            <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Leslie Alexander</h2>
    <p>Commercial Broker</p>
    <div className="card-actions justify-center">
      <button className="flex gap-2"><MdOutlineEmail></MdOutlineEmail><FaPhone></FaPhone></button>
    </div>
  </div>
</div>
            </div>
            <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Darlene Robertson</h2>
    <p>Realtor</p>
    <div className="card-actions justify-center">
      <button className="flex gap-2"><MdOutlineEmail></MdOutlineEmail><FaPhone></FaPhone></button>
    </div>
  </div>
</div>
            </div>
            <div>
              
            </div>
        </div>
        </section>
    );
};

export default Agents;