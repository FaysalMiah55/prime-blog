import PropTypes from 'prop-types';

export const blog = ({blog}) => {
    console.log(blog)
  return (
    <div>blog</div>
  )
}

Blog.propTypes = {
    blog:PropTypes.object.isRequired
}