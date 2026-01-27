import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import App from "../App.vue";

describe('App', () => {
  it('renderizar mensaje', () => {
    const wrapper = mount(App, { props: { msg: 'Ingresa tus credenciales' } });
    expect(wrapper.text()).toContain('Ingresa tus credenciales para continuar');
  });
});

