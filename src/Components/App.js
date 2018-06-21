import Main from "./Main";
import { connect } from "react-redux";
import { removePost, addPost } from "../redux/actions";
import { withRouter } from "react-router";

function mapStateToProps(state) {
  return {
    posts: state
  };
}
function mapDispatchToProps(dispatch) {
  return {
    removePhoto: function(index) {
      dispatch(removePost(index));
    },
    addPhoto: function(post) {
      dispatch(addPost(post));
    }
  };
}
const App = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);

export default App;
