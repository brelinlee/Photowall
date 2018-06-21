import React from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Photowall(props) {
  return (
    <div>
      <Link className="addicon" to="/Addphoto" />
      <div className="photogrid">
        {props.posts
          .sort((x, y) => y.id - x.id)
          .map((post, index) => (
            <Photo key={index} index={index} post={post} {...props} />
          ))}
      </div>
    </div>
  );
}
// class Photowall extends Component {
//   render() {
//     return (
//       <div className="photogrid">
//         {this.props.posts.map((post, index) => (
//           <Photo key={index} post={post} />
//         ))}
//       </div>
//     );
//   }
// }
Photowall.propTypes = {
  posts: PropTypes.array.isRequired
};
export default Photowall;
