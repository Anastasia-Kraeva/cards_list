import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ICard, IToggleIsFavorite} from '../../models/interfaces';

interface IState {
  cards: ICard[],
  isShowFavoritesOnly: boolean,
}

const initialState: IState = {
  cards: [],
  isShowFavoritesOnly: false,
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    createCard(state, action: PayloadAction<ICard>) {
      state.cards.push(action.payload)
    },
    toggleIsFavorite(state, action: PayloadAction<IToggleIsFavorite>) {
      state.cards = state.cards.map(card => {
        if (card.post.id === action.payload.id) {
          card.isFavorite = action.payload.value
        }
        return card
      })
    },
    toggleShowFavoritesOnly(state, action: PayloadAction<boolean>) {
      state.isShowFavoritesOnly = action.payload
    }
  }
})

export const {toggleIsFavorite, createCard, toggleShowFavoritesOnly} = postsSlice.actions
export default postsSlice.reducer
