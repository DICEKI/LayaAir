/**
 * @en Planar shadow configuration
 * @zh 平面阴影配置
 */
export class PlanarShadowConfig {

	/** @internal */
	private _enable: boolean = false;

	/**
	 * @en Enable planar shadow
	 * @zh 启用平面阴影
	 */
	get enable(): boolean {
		return this._enable;
	}

	set enable(value: boolean) {
		this._enable = value;
	}

	constructor() {
	}

}
