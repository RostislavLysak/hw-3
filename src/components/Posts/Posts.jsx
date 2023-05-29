import React from "react";
import { getPosts, deletePost, editPost, addPost } from "../../plugins/api";
import Loader from "../Loader";
import Post from "./Post";
import EditPost from './EditPost'
import CreatePost from './CreatePost'


export default class Posts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            loading: false,
            isOpen: false,
            postId: ""
        };
    }

    handleDelete = (id) => {
        if (window.confirm(`Are you sure you want to delete the post number ${id}`)) {

            deletePost(id);

            this.setState({
                posts: this.state.posts.filter((post) => post.id !== id)
            })

            alert('Operation completed successfully')
        }
    }

    handleEdit = (id) => {
        this.setState({ isOpen: true, postId: id });
    };

    handleSubmitEdit = async (values) => {
        if (!values.title) return this.setState({ isOpen: false });

        const { postId } = this.state;

        const data = await editPost(postId, values);

        this.setState({
            isOpen: false,
            posts: this.state.posts.map((post) =>
                post.id === postId ? { ...post, ...data } : post
            )
        });

        alert("Operation completed successfully");
    };

    handleClose = () => {
        this.setState({ isOpen: false });
    };


    handleAdd = async (values) => {
        if (!values.title) return

        const data = await addPost(values)

        this.setState({ posts: [...this.state.posts, data] })
    }


    async componentDidMount() {

        this.setState({ loading: true })

        const data = await getPosts();

        setTimeout(() => {
            this.setState({ posts: data, loading: false })
        }, 1000)
    }

    render() {

        if (this.state.loading) {
            return (
                <Loader />
            )
        }

        return (
            <>
                <CreatePost onSubmit={this.handleAdd} />

                {this.state.posts.map((post) => (
                    <Post
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        onEdit={this.handleEdit}
                        onDelete={this.handleDelete}
                    />
                ))}

                <EditPost
                    open={this.state.isOpen}
                    onCancel={this.handleClose}
                    onSubmit={this.handleSubmitEdit}
                />
            </>
        );
    }
}