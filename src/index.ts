import { config, Namespace } from '@homelab/shared'

const cfg = config('home-assistant')

const ns = new Namespace('home-assistant', {
  metadata: { name: cfg.get('namespace', 'home-assistant') },
})

export const namespace = ns.metadata.name
