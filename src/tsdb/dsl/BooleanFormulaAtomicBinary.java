package tsdb.dsl;

import java.util.Set;

public abstract class BooleanFormulaAtomicBinary extends BooleanFormula {	
	public final Formula a;
	public final Formula b;
	public BooleanFormulaAtomicBinary(Formula a, Formula b) {
		this.a = a;
		this.b = b;
	}
	@Override
	public void collectVariables(Set<String> collector, Environment env) {
		a.collectDataVariables(collector, env);
		b.collectDataVariables(collector, env);
	}	
}
