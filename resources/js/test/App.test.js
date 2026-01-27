import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import App from '../components/App.vue';

describe('App', () => {
  it('renderizar mensaje', () => {
    const wrapper = mount(App, { props: { msg: 'Hola, verificacion de test' } });
    expect(wrapper.text()).toContain('Hola, verificacion de test');
  });
});

