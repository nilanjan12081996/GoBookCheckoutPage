import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCharactersList,
  fetchCharactersListAfterLogin,
  getTagsList,
  searchCharacter,
  searchCharacterAfterLogin,
  sortCharacter,
  sortCharacterAfterLogin,
} from '../reducers/CharacterSlice';

// Fetching All Tags
const useTagsList = () => {
  const dispatch = useDispatch();
  const tagsList = useSelector((state) => state.character.tags);

  let primaryTags = [];
  let secondaryTags = [];

  if (tagsList && tagsList.length) {
    tagsList.forEach((item) => {
      item.secondary_tag === 0
        ? primaryTags.push({
            value: item.id,
            label: item.name,
          })
        : secondaryTags.push({
            value: item.id,
            label: item.name,
          });
    });
  }

  useEffect(() => {
    dispatch(getTagsList());
  }, [dispatch]);
  return { primaryTags, secondaryTags };
};

// Search Character
// const useCharacters = (searchQuery) => {
//   const dispatch = useDispatch();
//   const { characterList: characters } = useSelector((state) => state.character);

//   useEffect(() => {
//     if (
//       searchQuery.entity !== '' ||
//       searchQuery.gender !== '' ||
//       searchQuery.tag !== ''
//     ) {
//       dispatch(searchCharacter(searchQuery));
//     } else {
//       dispatch(fetchCharactersList());
//     }
//   }, [searchQuery, dispatch]);

//   return { characters };
// };

const useCharacters = (pageSection) => {
  const dispatch = useDispatch();
  const { characterList: characters, totalPage: totalPages } = useSelector(
    (state) => state.character
  );
  useEffect(() => {
    if (
      pageSection.entity !== '' ||
      pageSection.gender !== '' ||
      pageSection.tag !== ''
    ) {
      dispatch(searchCharacter(pageSection));
    } else if (pageSection.sortTag !== '') {
      dispatch(sortCharacter(pageSection));
    } else {
      dispatch(fetchCharactersList(pageSection));
    }
  }, [pageSection, dispatch]);
  return { characters, totalPages };
};

const useCharactersAfterLogin = (pageSection) => {
  const dispatch = useDispatch();
  const { characterList: characters, totalPage: totalPages } = useSelector(
    (state) => state.character
  );

  useEffect(() => {
    if (
      pageSection.entity !== '' ||
      pageSection.gender !== '' ||
      pageSection.tag !== ''
    ) {
      dispatch(searchCharacterAfterLogin(pageSection));
    } else if (pageSection.sortTag !== '') {
      dispatch(sortCharacterAfterLogin(pageSection));
    } else {
      dispatch(fetchCharactersListAfterLogin(pageSection));
    }
  }, [pageSection, dispatch]);

  return { characters, totalPages };
};

export { useTagsList, useCharacters, useCharactersAfterLogin };
