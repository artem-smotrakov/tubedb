package tsdb.component.labeledproperty;

import java.util.Map;

public class BooleanFormulaNotEqual extends BooleanFormulaBinary {
	public BooleanFormulaNotEqual(Formula a, Formula b) {
		super(a, b);
	}
	@Override
	public BooleanComputation compile(Map<String, Integer> sensorMap) {
		return new BooleanComputation() {
			Computation x = a.compile(sensorMap);
			Computation y = b.compile(sensorMap);
			@Override
			public boolean eval(float[] data) {
				return x.eval(data) == y.eval(data);
			}
		};
	}
	@Override
	public String compileToString(Map<String, Integer> sensorMap) {
		String ja = a.compileToString(sensorMap);
		String jb = b.compileToString(sensorMap);
		return "("+ja+"=="+jb+")";
	}
	@Override
	public BooleanFormula not() {
		return new BooleanFormulaEqual(a, b);
	}
}
