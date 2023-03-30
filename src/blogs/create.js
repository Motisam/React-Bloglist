import {useState} from "react";
import {firestoreDB} from "../firebase";
import {collection, addDoc, serverTimestamp} from "firebase/firestore";

// In this code snippet, two state variables are being created using React Hooks. The useState() hook is a way to add state to functional components in React. It takes an initial state value as an argument and returns an array containing the current state value and a function to update that state.
// Here's a breakdown of the code:
// const [title, setTitle] = useState("");
// title is a state variable that holds the current value of the title, and its initial value is set to an empty string "".
// setTitle is a function that can be used to update the value of title.
// // eslint-disable-next-line react-hooks/rules-of-hooks
// This is a comment to disable a specific ESLint rule for the next line of code. ESLint is a tool to enforce code style and find potential issues in JavaScript code. In this case, the developer is disabling the "rules-of-hooks" rule, which ensures that hooks are used following the proper conventions.
// const [blogBody, setBlogBody] = useState("");
// blogBody is a state variable that holds the current value of the blog body, and its initial value is set to an empty string "".
// setBlogBody is a function that can be used to update the value of blogBody.

const Create = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [title, setTitle] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [blogBody, setBlogBody] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        const collectionRef = collection(firestoreDB, "Blogs"); //! Get a reference to the blogs collection before adding a new document

        try {
            await addDoc(collectionRef, {
                Title: title,
                Body: blogBody,
                publish: false,
                published_on: serverTimestamp(),
            });
            alert("Blog created successfully");

            setTitle("");
            setBlogBody("");
        //? Resetting the useState variables after the form is submitted because we don't want the form to be filled with the previous data

        } catch (error) {
            console.log("Error: ", error)
        }
    }

    return (
        <>
            <h1 className="Display-1">Create your Blog</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="Blog Title"
                       required
                       type="text"
                       onChange={(e) => setTitle(e.target.value)}
                       value={title}
                />
                <textarea placeholder="Write your blog here"
                          required
                          type="text"
                          rows="10"
                          cols="150"
                          name="content"
                          onChange={(e) => setBlogBody(e.target.value)}
                          value={blogBody}
                    //       onChange={(e) => {
                    //           const newValue = e.target.value;
                    //           console.log(newValue)
                    //       }
                    //       }
                />
                <button type="submit">Create Blog</button>
            </form>
        </>
    )
}
export default Create;