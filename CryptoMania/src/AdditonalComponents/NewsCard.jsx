import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function NewsCard({news}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={news?.thumbnail} />
      <Card.Body>
        <Card.Title>{news?.title}</Card.Title>
        <Card.Text>
          {news?.description}
        </Card.Text>
        <Button onClick={() => window.location.href = news?.url} variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  );
}

export default NewsCard;