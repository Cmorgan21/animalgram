import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import SearchPagePost from "../pages/posts/SearchPagePost";
import Asset from "../components/Asset";
import appStyles from "../App.module.css";
import styles from "../styles/SearchPage.module.css";
import { axiosReq } from "../api/axiosDefaults";
import NoResults from "../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../utils/utils";

function SearchPage() {
  const [posts, setPosts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?search=${query}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchPosts();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  return (
    <Row className={`${styles.container} h-100`}>
      <Col className="py-2 p-0 p-lg-2" lg={13}>
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search posts"
          />
        </Form>

        {hasLoaded ? (
          <>
            {posts.results.length ? (
              <InfiniteScroll
                className={styles.GridContainer}
                dataLength={posts.results.length}
                loader={<Asset spinner />}
                hasMore={!!posts.next}
                next={() => fetchMoreData(posts, setPosts)}
              >
                {posts.results.map((post) => {
                  console.log("Post data:", post); // Debugging line
                  return <SearchPagePost key={post.id} {...post} setPosts={setPosts} />;
                })}
              </InfiniteScroll>
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message="No results found" />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
    </Row>
  );
}

export default SearchPage;
