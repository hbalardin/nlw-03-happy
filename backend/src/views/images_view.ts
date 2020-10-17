import Image from '../models/Image';

const ip = '192.168.3.8';

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `http://${ip}:3333/uploads/${image.path}`,
    };
  },

  renderMany(images: Image[]) {
    return images.map(image => this.render(image));
  },
};
