import { useNavigate } from 'react-router-dom';
import { FilmCardProps } from '../../types/types';

function ButtonPlay({film}: FilmCardProps): JSX.Element {
  const navigate = useNavigate();
  return (
    <button
      className="btn btn--play film-card__button"
      type="button"
      onClick={() => navigate(`/player/${film.id}`)}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
}

export default ButtonPlay;
