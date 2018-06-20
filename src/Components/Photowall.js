import React from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";

function Photowall(props) {
  return (
    <div className="photogrid">
      {props.posts.map((post, index) => (
        <Photo key={index} post={post} onRemovePhoto={props.removePhoto} />
      ))}
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
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired
};
export default Photowall;
