import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  try {
    const userPromise = signUpUser(firstName, lastName);
    const photoPromise = uploadPhoto(fileName);

    const user = await userPromise.then((value) => ({
      status: 'fulfilled',
      value,
    })).catch((error) => ({
      status: 'rejected',
      value: `${error.name}: ${error.message}`,
    }));

    const photo = await photoPromise.then((value) => ({
      status: 'fulfilled',
      value,
    })).catch((error) => ({
      status: 'rejected',
      value: `${error.name}: ${error.message}`,
    }));

    return [user, photo];
  } catch (error) {
    console.error('Error during profile signup:', error);
    return [];
  }
}
