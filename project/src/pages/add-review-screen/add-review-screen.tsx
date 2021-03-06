import { Link, useParams } from 'react-router-dom';
import AddReviewFrom from '../../components/add-review-form/add-review-form';
import Logo from '../../components/logo/logo';
import { AppProps } from '../../types/types';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function AddReviewScreen({films}: AppProps): JSX.Element {

  const params = useParams();

  const film = films.find((f) => f.id.toString() === params.id);

  return film === undefined
    ? <NotFoundScreen />
    : (
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header">
            <Logo light={false} />

            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`/films/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
                </li>
                <li className="breadcrumbs__item">
                  <a className="breadcrumbs__link">Add review</a>
                </li>
              </ul>
            </nav>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__poster film-card__poster--small">
            <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <AddReviewFrom film={film} />
        </div>

      </section>
    );
}

export default AddReviewScreen;
