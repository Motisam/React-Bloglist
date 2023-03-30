import React, {useState, useEffect} from "react";
import {firestoreDB} from "../firebase";
import {Container, Row, Col} from "react-bootstrap";
import {collection, query, orderBy, onSnapshot} from "firebase/firestore";
import "./ShowBlog.css"


const Show = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const collectionRef = collection(firestoreDB, "Blogs");
        const q = query(collectionRef, orderBy("published_on", "desc"));
        const unsubscribe = onSnapshot(q, (Snapshot) => {
            const blogData = Snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setBlogs(blogData);
        });
        return () => {
            unsubscribe()
        };
    }, []);

    return (
        <Container className="show-blog-container">
            <Row className="show-blog-heading">
                <h1 className="Display-6 text-center">Here are the latest blogs form DB "Blogs"</h1>
            </Row>
            {blogs.map((loadingUIBlogs) => (
                    <Row className="blog-row" key={loadingUIBlogs.id}>
                        <Col className="blog-col-title" xs={4}>
                            <span>{loadingUIBlogs.Title}</span>
                        </Col>
                        <Col className="blog-col-body" xs={8}>
                            <p>{loadingUIBlogs.Body}</p>
                        </Col>
                        <Col xs={12}>
                            <span className="blog-time">{loadingUIBlogs.published_on &&
                                new Date(loadingUIBlogs.published_on.seconds * 1000).toLocaleString()}</span>
                        </Col>
                    </Row>
                ) //closing the event body of the loadingUIBlogs
            )//closing the parameter brackets of map()
            }{/*closing the encapsulation of the mapping*/}
        </Container>
    )
}
export default Show;
