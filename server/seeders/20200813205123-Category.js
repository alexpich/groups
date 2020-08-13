"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Outdoors",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "Tech", createdAt: new Date(), updatedAt: new Date() },
        { name: "Family", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "Health & Wellness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sports & Fitness",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "Learning", createdAt: new Date(), updatedAt: new Date() },
        { name: "Photography", createdAt: new Date(), updatedAt: new Date() },
        { name: "Food & Drink", createdAt: new Date(), updatedAt: new Date() },
        { name: "Writing", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "Language & Culture",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "Music", createdAt: new Date(), updatedAt: new Date() },
        { name: "Movements", createdAt: new Date(), updatedAt: new Date() },
        { name: "LGBTQ", createdAt: new Date(), updatedAt: new Date() },
        { name: "Film", createdAt: new Date(), updatedAt: new Date() },
        { name: "Scifi & Games", createdAt: new Date(), updatedAt: new Date() },
        { name: "Beliefs", createdAt: new Date(), updatedAt: new Date() },
        { name: "Arts", createdAt: new Date(), updatedAt: new Date() },
        { name: "Dance", createdAt: new Date(), updatedAt: new Date() },
        { name: "Pets", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "Hobbies & Crafts",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fashion & Beauty",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "Social", createdAt: new Date(), updatedAt: new Date() },
        {
          name: "Career & Business",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
