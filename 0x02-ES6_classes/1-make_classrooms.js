import ClassRoom from './0-classroom.js';

// Function to initialize an array of ClassRoom objects with specified sizes
export default function initializeRooms() {
  const roomSizes = [19, 20, 34];
  return roomSizes.map(size => new ClassRoom(size));
}
