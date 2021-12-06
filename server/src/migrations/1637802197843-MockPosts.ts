import { MigrationInterface, QueryRunner } from "typeorm";

export class MockPosts1637802197843 implements MigrationInterface {
  name = "MockPosts1637802197843";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      insert into post (title, text, points, "creatorId", "createdAt") values ('Moving Violations', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

      Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

      Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 113, 1, '2021-07-16T21:33:24Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Kelly''s Heroes', 'In congue. Etiam justo. Etiam pretium iaculis justo.

      In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

      Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 265, 1, '2021-10-27T21:29:52Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Krabat', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

      Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

      Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 215, 3, '2021-09-14T11:33:14Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('First Daughter', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 194, 3, '2021-01-17T01:25:06Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Chicken, the Fish and the King Crab, The (El pollo, el pez y el cangrejo real)', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 236, 3, '2021-02-15T13:44:53Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Stuck ', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.

      Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', 80, 2, '2021-02-25T06:26:27Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('10 minutes (10 minuta)', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 247, 1, '2020-12-25T05:34:49Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Love''s Long Journey', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

      Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

      Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 293, 3, '2020-12-25T17:36:16Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('First Nudie Musical, The', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

      Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

      Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 197, 3, '2020-12-11T09:27:57Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Love Me No More (Deux jours à tuer)', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

      Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 177, 3, '2021-07-18T14:14:31Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Whole Ten Yards, The', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

      Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 134, 3, '2021-07-18T01:13:28Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Smell of Camphor, Fragrance of Jasmine (Booye kafoor, atre yas)', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 244, 1, '2021-03-23T08:44:19Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Moth, The (Cma)', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

      Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 40, 3, '2021-07-10T07:52:18Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Once Bitten', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

      Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

      Phasellus in felis. Donec semper sapien a libero. Nam dui.', 288, 2, '2021-07-13T15:10:03Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Moloch (Molokh)', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

      Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 53, 1, '2021-08-14T17:17:23Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Mother Joan of the Angels (Matka Joanna od aniolów)', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

      Sed ante. Vivamus tortor. Duis mattis egestas metus.', 295, 3, '2021-11-24T05:00:20Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Pretty One, The', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 31, 3, '2021-05-02T04:38:18Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('American Drug War: The Last White Hope', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

      Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

      Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 299, 1, '2021-06-12T08:39:56Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Under the Skin', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 286, 1, '2021-01-30T16:57:32Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Impostors, The', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

      Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 98, 1, '2021-03-20T18:26:07Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('52 Pick-Up', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 250, 3, '2020-12-12T07:32:45Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Gold Rush, The', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 0, 2, '2021-05-09T23:56:26Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Cat Came Back, The', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.

      Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

      Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', 40, 1, '2021-03-04T08:51:55Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Goal! III', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

      Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 10, 1, '2021-04-11T06:16:42Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Lathe of Heaven, The', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

      Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.

      Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', 188, 2, '2021-05-29T08:19:19Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('The Dependent', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 64, 2, '2021-05-22T17:31:32Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Horror Planet (a.k.a. Inseminoid)', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

      Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 115, 3, '2021-04-14T02:29:01Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Hidden (a.k.a. Cache) (Caché)', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

      Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', 97, 1, '2021-11-17T04:13:52Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Art of the Steal, The', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.

      Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

      Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 37, 1, '2021-01-02T12:06:41Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Sydney White', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

      Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 293, 3, '2021-10-05T08:45:19Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Box, The', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

      Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

      Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', 216, 3, '2021-06-14T00:40:21Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('The Mayor of Casterbridge', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

      Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 278, 1, '2021-06-03T19:41:30Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Platinum Blonde', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

      Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', 78, 1, '2021-05-18T17:00:35Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Final Destination 2', 'In congue. Etiam justo. Etiam pretium iaculis justo.

      In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

      Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 297, 2, '2021-07-26T12:07:07Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Spriggan (Supurigan)', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.

      Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.

      Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 103, 3, '2021-06-01T01:55:36Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Jönssonligan på Mallorca', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 223, 3, '2021-08-10T11:26:33Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Borrowed Time', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', 36, 1, '2021-04-08T12:16:58Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Rush Hour 2', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 47, 3, '2021-02-18T17:21:36Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Medicine Man', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

      Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

      Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 37, 2, '2021-09-21T15:04:20Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Patti Smith: Dream of Life', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 260, 2, '2021-09-07T20:58:35Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('WUSA', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 128, 2, '2021-01-31T17:35:43Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Girl Walks Into a Bar', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

      Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 230, 2, '2021-07-30T13:16:43Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Return of the Living Dead, The', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

      Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

      In congue. Etiam justo. Etiam pretium iaculis justo.', 122, 1, '2021-08-06T10:12:14Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Diabolique', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 58, 2, '2021-09-23T09:16:57Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Silent Scream, The', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

      Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

      Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 115, 2, '2021-03-10T17:21:05Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Samurai III: Duel on Ganryu Island (a.k.a. Bushido) (Miyamoto Musashi kanketsuhen: kettô Ganryûjima)', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

      Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.

      Fusce consequat. Nulla nisl. Nunc nisl.', 72, 2, '2021-07-31T19:20:44Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('More Than Honey', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.', 209, 3, '2021-07-18T23:03:01Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Tokyo Drifter (Tôkyô nagaremono)', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

      Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

      Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 54, 2, '2021-09-20T15:32:18Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Eagle, The', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 147, 1, '2021-09-02T01:48:26Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Cloverfield', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

      Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 136, 1, '2021-03-28T01:06:59Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Ursul', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 178, 3, '2021-06-12T08:51:34Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Ricky Gervais Live: Animals', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

      Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 105, 1, '2021-05-12T12:23:37Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Eden Is West (Eden à l''Ouest)', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 294, 3, '2020-12-15T11:52:11Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('How I Won the War', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

      In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

      Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 120, 1, '2020-12-18T00:33:26Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Boy Meets Girl', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.

      Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', 55, 2, '2021-01-25T16:16:55Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('My Girl', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

      Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', 210, 2, '2021-09-21T17:43:03Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Bank, The', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

      Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

      Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 266, 1, '2021-05-14T15:26:07Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Naked', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

      Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', 102, 2, '2021-02-16T04:26:13Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('One Spy Too Many', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

      Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', 90, 3, '2021-10-27T17:53:57Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Divorce Iranian Style', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 246, 3, '2021-09-19T00:07:38Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Imago mortis', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 41, 2, '2021-09-01T01:22:04Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('As Far As My Feet Will Carry Me (So weit die Füße tragen)', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

      Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 208, 1, '2021-12-01T10:30:40Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Traffic', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.

      Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', 215, 1, '2021-01-27T12:03:02Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Broken Lance', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

      Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.

      In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', 252, 1, '2021-11-12T12:56:49Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('They Died with Their Boots On', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.', 228, 1, '2021-02-03T10:12:04Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Dying Young', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

      Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 84, 2, '2021-10-30T08:49:51Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Suburban Commando', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', 122, 3, '2021-08-14T06:41:58Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Corrina, Corrina', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.

      Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.

      Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', 28, 2, '2021-06-02T09:04:54Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Good Student, The (Mr. Gibb)', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 284, 3, '2021-08-21T10:36:18Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('All Cheerleaders Die', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.

      Sed ante. Vivamus tortor. Duis mattis egestas metus.

      Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 284, 1, '2021-05-17T05:11:38Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Mark of Zorro, The', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 300, 3, '2021-09-17T03:46:41Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('First Strike (Police Story 4: First Strike) (Ging chaat goo si 4: Ji gaan daan yam mo)', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

      Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

      In congue. Etiam justo. Etiam pretium iaculis justo.', 62, 1, '2021-07-20T16:01:17Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('White Heat', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

      Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', 17, 2, '2021-02-17T05:06:19Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Emperor and the Assassin, The (Jing ke ci qin wang)', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

      Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 119, 3, '2021-11-10T09:05:37Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Futurama: Into the Wild Green Yonder', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

      Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', 59, 3, '2021-06-17T09:42:31Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Ruling Class, The', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

      Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

      Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 142, 2, '2020-12-16T02:38:02Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Takeshis''', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.

      Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 183, 1, '2021-07-07T16:50:17Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Ballad of Ramblin'' Jack, The', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.

      Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', 131, 1, '2021-01-21T10:36:43Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Thumbelina', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', 299, 2, '2021-04-14T23:34:06Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Hitchcock', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', 155, 2, '2021-10-29T19:32:27Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Much Ado About Nothing', 'In congue. Etiam justo. Etiam pretium iaculis justo.

      In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

      Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', 112, 2, '2021-07-05T19:29:30Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Battling Butler', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

      In congue. Etiam justo. Etiam pretium iaculis justo.

      In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', 0, 1, '2021-05-21T21:23:49Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Sex Positive', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', 198, 1, '2021-10-05T18:18:03Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Trick or Treat', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', 216, 2, '2021-07-04T07:23:01Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Curiosity of Chance, The', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

      Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

      Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', 265, 3, '2021-02-22T17:43:51Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Local Color', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

      Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.

      Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', 279, 3, '2021-08-08T15:17:54Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('And You Thought Your Parents Were Weird', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.

      Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

      Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', 288, 1, '2021-07-11T05:06:34Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Return, The (Vozvrashcheniye)', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', 80, 3, '2021-03-31T10:22:37Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Dead Time: Kala', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', 299, 1, '2021-06-20T04:05:24Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Under the Sand', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', 198, 2, '2021-06-17T19:40:00Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Pahat pojat', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

      Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

      In congue. Etiam justo. Etiam pretium iaculis justo.', 75, 3, '2020-12-07T13:39:26Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Escape Artist, The', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

      Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', 261, 3, '2021-05-10T19:53:04Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Hori Smoku Sailor Jerry: The Life of Norman K. Collins ', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', 14, 1, '2021-02-18T15:00:14Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Scrooged', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

      Phasellus in felis. Donec semper sapien a libero. Nam dui.

      Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', 192, 1, '2021-11-29T14:33:59Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Romanzo Criminale', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 200, 2, '2021-03-22T20:08:29Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Lucky Night', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.', 127, 1, '2021-07-24T22:40:22Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Kurt & Courtney', 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.

      Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

      Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', 56, 3, '2021-03-21T04:50:05Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Four Nights with Anna (Cztery noce z Anna)', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.

      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', 28, 1, '2021-02-17T12:21:10Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Inequality for All', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.

      Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', 257, 2, '2021-06-24T16:17:23Z');
      insert into post (title, text, points, "creatorId", "createdAt") values ('Jude', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', 13, 2, '2021-01-01T23:13:10Z');
    `);
  }

  public async down(_: QueryRunner): Promise<void> {}
}
